<?php

namespace App\Controller\Rest;

use App\Entity\User;
use App\Entity\Guide;

use Doctrine\ORM\EntityManagerInterface;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use OpenApi\Annotations as OA;

/**
 * Class RestController
 *
 * @Route("/")
 */
class RestController extends AbstractController
{
    private EntityManagerInterface $em;
    private UserPasswordHasherInterface $passwordHasher;
    private JWTTokenManagerInterface $jwtManager;

    public function __construct(EntityManagerInterface $em,
        UserPasswordHasherInterface $passwordHasher,
        JWTTokenManagerInterface $jwtManager
    ) {
        $this->em = $em;
        $this->passwordHasher = $passwordHasher;
        $this->jwtManager = $jwtManager;
    }

    /**
     * Logins the user to the app.
     *
     * This call takes the username and password, validates them, and if they are correct, it will return a token to be used in all subsequent requests.
     *
     * @Rest\Post("api/login_check", name="api_login_check")
     *
     * @OA\Post(
     *     path="/login_check",
     *     summary="Login user to the app",
     *     description="Validates username and password and returns JWT token",
     *     tags={"User"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"username","password"},
     *             @OA\Property(property="username", type="string", example="john"),
     *             @OA\Property(property="password", type="string", example="secret")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="User was logged in successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="token", type="string")
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Invalid user and password",
     *         @OA\JsonContent(
     *             @OA\Property(property="code", type="integer", example=401),
     *             @OA\Property(property="error", type="boolean", example=true),
     *             @OA\Property(property="data", type="string", example="Invalid credentials")
     *         )
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal server error",
     *         @OA\JsonContent(
     *             @OA\Property(property="code", type="integer", example=500),
     *             @OA\Property(property="error", type="boolean", example=true),
     *             @OA\Property(property="data", type="string", example="An error has occurred")
     *         )
     *     )
     * )
     */
    public function getLoginCheckAction(Request $request): JsonResponse
    {
        try {
            if (!$request->headers->has('Content-Type')) {
                throw new \Exception("Missing Content-Type header.");
            }

            $username = $request->get('username');
            $password = $request->get('password');

            $user = $this->em->getRepository(User::class)->findOneBy(['username' => $username, 'enabled' => true]);

            if (!$user) {
                return new JsonResponse([
                    'code' => 401,
                    'error' => true,
                    'data' => "No user found- Error"
                ], Response::HTTP_UNAUTHORIZED);
            }

            if (!$this->passwordHasher->isPasswordValid($user, $password)) {
                return new JsonResponse([
                    'code' => 401,
                    'error' => true,
                    'data' => "Invalid user and password- Error"
                ], Response::HTTP_UNAUTHORIZED);
            }

            // Valid user and password - generate token
            $token = $this->jwtManager->create($user);
            return new JsonResponse(['token' => $token]);

        } catch (\Exception $ex) {
            return new JsonResponse([
                'code' => 500,
                'error' => true,
                'data' => "An error has occurred trying to retrieve the user - Error: {$ex->getMessage()}"
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Gets the Guide Info.
     *
     * Returns detail info.
     *
     * @Rest\Get("api/v1/guide/{data}/{type}", name="api_guide_detail")
     *
     * @OA\Get(
     *     path="/v1/guide/{data}/{type}",
     *     summary="Gets the Guide Info",
     *     description="Returns detail info",
     *     tags={"Guide"},
     *     @OA\Parameter(
     *         name="Content-Type",
     *         in="header",
     *         @OA\Schema(type="string", default="application/json")
     *     ),
     *     @OA\Parameter(
     *         name="Authorization",
     *         in="header",
     *         required=true,
     *         description="Authorization",
     *         @OA\Schema(type="string", default="Bearer TOKEN")
     *     ),
     *     @OA\Parameter(
     *         name="data",
     *         in="path",
     *         required=true,
     *         description="guide code or phone number",
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Parameter(
     *         name="type",
     *         in="path",
     *         required=true,
     *         description="phone / guide",
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Parameter(
     *         name="app_version",
     *         in="query",
     *         required=true,
     *         description="The version of the app",
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Parameter(
     *         name="code_version",
     *         in="query",
     *         required=true,
     *         description="The version of the code",
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Parameter(
     *         name="language",
     *         in="query",
     *         required=true,
     *         description="The language being used (either en or es)",
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Parameter(
     *         name="time_offset",
     *         in="query",
     *         required=false,
     *         description="Time difference with respect to GMT time",
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Returns guide detail",
     *         @OA\JsonContent(
     *             @OA\Property(
     *                 property="data",
     *                 type="object",
     *                 @OA\Property(property="id", type="string", description="Guide code"),
     *                 @OA\Property(property="comment", type="string", description="comment", example="comentario sobre la guía"),
     *                 @OA\Property(property="tracking", type="string", description="Tracking number", example="123123123"),
     *                 @OA\Property(property="status", type="string", description="Status", example="Ingresado")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal error",
     *         @OA\JsonContent(
     *             @OA\Property(property="data", type="string", example=""),
     *             @OA\Property(property="message", type="string", example="Internal error.")
     *         )
     *     )
     * )
     */
    public function getGuideDetailAction(Request $request): JsonResponse
    {
        try {
            $data = [];

            $type = trim((string) $request->get('type'));

            if ($type === "guide") {
                $guideCode = trim((string) $request->get('data'));
                $objGuide = $this->em->getRepository(Guide::class)->findOneByCode($guideCode);
            } else {
                $phone = trim((string) $request->get('data'));
                $objGuide = $this->em->getRepository(Guide::class)->findOneBy(
                    ["receiverPhone" => $phone],
                    ["id" => "DESC"]
                );
            }

            if ($objGuide) {
                $tracking = trim((string) $objGuide->getTracking());

                if ($tracking === "N/A" || $tracking === "N/A-" || $tracking === "") {
                    $tracking = trim((string) $objGuide->getFedex());
                }

                if ($tracking === "N/A" || $tracking === "N/A-" || $tracking === "") {
                    $tracking = $objGuide->getDhl() !== null ? trim((string) $objGuide->getDhl()) : "N/A";
                }

                $data = [
                    "id" => $objGuide->getCode(),
                    "comment" => trim((string) $objGuide->getSmsMessage()),
                    "tracking" => $tracking,
                    "status" => $objGuide->getStatus()
                ];
            } else {
                return new JsonResponse(['message' => "No results found"], Response::HTTP_OK);
            }

            return new JsonResponse([
                'data' => $data
            ]);
        } catch (\Exception $ex) {
            return new JsonResponse(['message' => $ex->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Gets the Alternate Guide Info.
     *
     * Returns detail info.
     *
     * @Rest\Get("api/v1/alternate_guide/{data}", name="api_alternate_guide_detail")
     *
     * @OA\Get(
     *     path="/v1/alternate_guide/{data}",
     *     summary="Gets the Alternate Guide Info",
     *     description="Returns detail info",
     *     tags={"Guide"},
     *     @OA\Parameter(
     *         name="Content-Type",
     *         in="header",
     *         @OA\Schema(type="string", default="application/json")
     *     ),
     *     @OA\Parameter(
     *         name="Authorization",
     *         in="header",
     *         required=true,
     *         description="Authorization",
     *         @OA\Schema(type="string", default="Bearer TOKEN")
     *     ),
     *     @OA\Parameter(
     *         name="data",
     *         in="path",
     *         required=true,
     *         description="alternate guide code",
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Parameter(
     *         name="app_version",
     *         in="query",
     *         required=true,
     *         description="The version of the app",
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Parameter(
     *         name="code_version",
     *         in="query",
     *         required=true,
     *         description="The version of the code",
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Parameter(
     *         name="language",
     *         in="query",
     *         required=true,
     *         description="The language being used (either en or es)",
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Parameter(
     *         name="time_offset",
     *         in="query",
     *         required=false,
     *         description="Time difference with respect to GMT time",
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Returns guide detail",
     *         @OA\JsonContent(
     *             @OA\Property(
     *                 property="data",
     *                 type="object",
     *                 @OA\Property(property="comment", type="string", description="comment", example="comentario sobre la guía"),
     *                 @OA\Property(property="tracking", type="string", description="Tracking number", example="123123123"),
     *                 @OA\Property(property="status", type="string", description="Status", example="Ingresado")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal error",
     *         @OA\JsonContent(
     *             @OA\Property(property="data", type="string", example=""),
     *             @OA\Property(property="message", type="string", example="Internal error.")
     *         )
     *     )
     * )
     */
    public function getAlternateGuideDetailAction(Request $request): JsonResponse
    {
        try {
            $data = [];

            $guideCode = trim((string) $request->get('data'));
            $objGuide = $this->em->getRepository(Guide::class)->findOneByAlternateCode($guideCode);

            if ($objGuide) {
                $tracking = trim((string) $objGuide->getTracking());

                if ($tracking === "N/A" || $tracking === "N/A-" || $tracking === "") {
                    $tracking = trim((string) $objGuide->getFedex());
                }

                if ($tracking === "N/A" || $tracking === "N/A-" || $tracking === "") {
                    $tracking = $objGuide->getDhl() !== null ? trim((string) $objGuide->getDhl()) : "N/A";
                }

                $data = [
                    "comment" => trim((string) $objGuide->getSmsMessage()),
                    "tracking" => $tracking,
                    "status" => $objGuide->getStatus()
                ];
            } else {
                return new JsonResponse(['message' => "No results found"], Response::HTTP_OK);
            }

            return new JsonResponse([
                'data' => $data
            ]);
        } catch (\Exception $ex) {
            return new JsonResponse(['message' => $ex->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}