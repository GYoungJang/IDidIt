const express = require('express');
const IDI = require('../controller/IDI_Controller');
const router = express.Router();

// get 처리 라우팅
router.get('/', IDI.get_home);
/**
 * @swagger
 *  /signup:
 *    get:
 *      summary: 회원가입 페이지
 *      tags:
 *      - user
 *      description: 회원가입 페이지
 *      produces:
 *      - application/json
 *
 *      responses:
 *       200:
 *        description: 회원가입 페이지 렌더링 성공
 */
router.get('/signup', IDI.get_signup);

/**
 * @swagger
 *  /login:
 *    get:
 *      summary: 로그인 페이지
 *      tags:
 *      - user
 *      description: 로그인 페이지
 *      produces:
 *      - application/json
 *
 *      responses:
 *       200:
 *        description: 로그인 페이지 렌더링 성공
 */
router.get('/login', IDI.get_login);
// 로그인 후 메인 페이지

router.post('/dashboard', IDI.get_dashboard);
router.get('/dashboard', IDI.get_dashboard);
router.get('/get_data', IDI.get_dashboard_data);

// 로그아웃 후 메인페이지
/**
 * @swagger
 *  /logout:
 *    get:
 *      summary: 로그아웃
 *      tags:
 *      - user
 *      description: 로그아웃
 *      produces:
 *      - application/json
 *
 *      responses:
 *       200:
 *        description: 로그아웃 성공
 */
router.get('/logout', IDI.get_logout);

// 마이페이지
/**
 * @swagger
 *  /userInfo:
 *    get:
 *      summary: 마이페이지
 *      tags:
 *      - user
 *      description: 마이페이지
 *      produces:
 *      - application/json
 *
 *      responses:
 *       200:
 *        description: 마이페이지 렌더링 성공
 */
router.get('/userInfo', IDI.get_userinfo);
// 아이디 찾기 페이지
/**
 * @swagger
 *  /forgot/id:
 *    get:
 *      summary: 아이디 찾기 페이지
 *      tags:
 *      - user
 *      description: 아이디 찾기 페이지
 *      produces:
 *      - application/json
 *
 *      responses:
 *       200:
 *        description: 아이디 찾기 페이지 렌더링 성공
 */
router.get('/forgot/id', IDI.get_id_forgot);
/**
 * @swagger
 *  /forgot/get_id:
 *    post:
 *     summary: 아이디 찾기
 *     tags:
 *      - user
 *
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         properties:
 *          name:
 *           type: string
 *           format: varchar(30)
 *           description : 이름
 *          email:
 *           type: string
 *           format: varchar(100)
 *           description : 이메일
 *
 *     responses:
 *      200:
 *       description: 아이디 찾기 성공
 */
router.post('/forgot/get_id', IDI.post_id_forgot);
// 비밀번호 찾기 페이지
/**
 * @swagger
 *  /forgot/pw:
 *    get:
 *      summary: 비밀번호 재설정 전 유저 확인 페이지
 *      tags:
 *      - user
 *      description: 비밀번호 재설정 전 유저 확인 페이지
 *      produces:
 *      - application/json
 *
 *      responses:
 *       200:
 *        description: 비밀번호 재설정 전 유저 확인 페이지 렌더링 성공
 */
router.get('/forgot/pw', IDI.get_pw_forgot);
/**
 * @swagger
 *  /forgot/pw/certify_post:
 *    post:
 *     summary: 비밀번호 재설정 전 유저 확인
 *     tags:
 *      - user
 *
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         properties:
 *          id:
 *           type: string
 *           format: varchar(30)
 *           description : 아이디
 *          name:
 *           type: string
 *           format: varchar(30)
 *           description : 이름
 *          email:
 *           type: string
 *           format: varchar(100)
 *           description : 이메일
 *
 *     responses:
 *      200:
 *       description: 비밀번호 재설정 전 유저 확인 성공
 */
router.post('/forgot/pw/certify_post', IDI.post_pw_forgot_certify);
/**
 * @swagger
 *  /forgot/pw/modify:
 *    get:
 *      summary: 비밀번호 재설정 페이지
 *      tags:
 *      - user
 *      description: 비밀번호 재설정 페이지
 *      produces:
 *      - application/json
 *
 *      responses:
 *       200:
 *        description: 비밀번호 재설정 페이지 렌더링 성공
 */
router.get('/forgot/pw/modify', IDI.get_pw_forgot_modify);
/**
 * @swagger
 *  /forgot/pw/modify_post:
 *    post:
 *     summary: 비밀번호 재설정
 *     tags:
 *      - user
 *
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         properties:
 *          password:
 *           type: string
 *           format: varchar(255)
 *           description : 비밀번호
 *
 *     responses:
 *      200:
 *       description: 비밀번호 재설정 성공
 */
router.post('/forgot/pw/modify_post', IDI.post_pw_forgot_modify);
// 일정
// 404 페이지
router.get('/404', IDI.get_404);

// post 처리 라우팅
router.post('/', IDI.get_home);

/**
 * @swagger
 *  /signup:
 *    post:
 *     summary: 회원가입
 *     tags:
 *      - user
 *
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         properties:
 *          id:
 *           type: string
 *           format: varchar(30)
 *           description : 아이디
 *          password:
 *           type: string
 *           format: varchar(255)
 *           description : 비밀번호
 *          name:
 *           type: string
 *           format: varchar(30)
 *           description : 이름
 *          email:
 *           type: string
 *           format: varchar(100)
 *           description : 이메일
 *          gender:
 *           type: string
 *           format: varchar(30)
 *           description : 성별
 *          nickname:
 *           type: string
 *           format: varchar(30)
 *           description : 별명
 *          phone_number:
 *           type: string
 *           format: varchar(15)
 *           description : 핸드폰 번호
 *
 *     responses:
 *      200:
 *       description: 회원가입 성공
 */
router.post('/signup', IDI.post_signup);

/**
 * @swagger
 *  /login:
 *    post:
 *     summary: 로그인
 *     tags:
 *      - user
 *
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         properties:
 *          id:
 *           type: string
 *           format: varchar(30)
 *           description : 아이디
 *          password:
 *           type: string
 *           format: varchar(255)
 *           description : 비밀번호
 *
 *     responses:
 *      200:
 *       description: 로그인 성공
 */
router.post('/login', IDI.post_login);
// router.post("/userInfo", IDI.post_userinfo);

// 회원 정보 수정
/**
 * @swagger
 *  /userInfo/edit:
 *    patch:
 *      summary: 마이페이지 수정
 *      tags:
 *      - user
 *      description: 마이페이지 수정
 *      produces:
 *      - application/json
 *      requestBody:
 *       required: true
 *       content:
 *        application/json:
 *         schema:
 *          type: object
 *          properties:
 *           id:
 *            type: string
 *            format: varchar(30)
 *            description : 아이디
 *           name:
 *            type: string
 *            format: varchar(30)
 *            description : 이름
 *           email:
 *            type: string
 *            format: varchar(100)
 *            description : 이메일
 *           nickname:
 *            type: string
 *            format: varchar(30)
 *            description : 별명
 *           phone_number:
 *            type: string
 *            format: varchar(15)
 *            description : 핸드폰 번호
 *      responses:
 *       200:
 *        description: 마이페이지 수정 성공
 */
router.patch('/userInfo/edit', IDI.patch_userinfo);
// 회원 탈퇴
/**
 * @swagger
 *  /userInfo/delete:
 *    delete:
 *      summary: 회원 탈퇴
 *      tags:
 *      - user
 *      description: 회원 탈퇴
 *      produces:
 *      - application/json
 *
 *      responses:
 *       200:
 *        description: 회원 탈퇴 성공
 */
router.delete('/userInfo/delete', IDI.delete_user);

//아이디 중복 검사
/**
 * @swagger
 *  /signup/checkID:
 *    post:
 *     summary: 아이디 중복 확인
 *     tags:
 *      - user
 *
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         properties:
 *          id:
 *           type: string
 *           format: varchar(30)
 *           description : 아이디
 *
 *
 *     responses:
 *      true:
 *       description: 아이디 사용 가능
 *      false:
 *       description: 중복된 아이디
 */
router.post('/signup/checkID', IDI.post_checkID);
//이메일 중복 검사
/**
 * @swagger
 *  /signup/checkEmail:
 *    post:
 *     summary: 이메일 중복 확인
 *     tags:
 *      - user
 *
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         properties:
 *          email:
 *           type: string
 *           format: varchar(100)
 *           description : 이메일
 *
 *
 *     responses:
 *      true:
 *       description: 이메일 사용 가능
 *      false:
 *       description: 중복된 이메일
 */
router.post('/signup/checkEmail', IDI.post_checkEmail);
//닉네임 중복 검사
/**
 * @swagger
 *  /signup/checkNickname:
 *    post:
 *     summary: 별명 중복 확인
 *     tags:
 *      - user
 *
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         properties:
 *          nickname:
 *           type: string
 *           format: varchar(30)
 *           description : 별명
 *
 *
 *     responses:
 *      true:
 *       description: 별명 사용 가능
 *      false:
 *       description: 중복된 별명
 */
router.post('/signup/checkNickname', IDI.post_checkNickname);

module.exports = router;
