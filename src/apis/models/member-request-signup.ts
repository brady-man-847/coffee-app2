/* tslint:disable */
/* eslint-disable */
/**
 * Mcafe V2 API
 * Mcafe V2 API 명세서
 *
 * The version of the OpenAPI document: 2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 회원가입
 * @export
 * @interface MemberRequestSignup
 */
export interface MemberRequestSignup {
  /**
   *
   * @type {string}
   * @memberof MemberRequestSignup
   */
  username: string;
  /**
   *
   * @type {string}
   * @memberof MemberRequestSignup
   */
  password: string;
  /**
   *
   * @type {string}
   * @memberof MemberRequestSignup
   */
  passwordCheck: string;
  /**
   *
   * @type {string}
   * @memberof MemberRequestSignup
   */
  nickname: string;
  /**
   *
   * @type {string}
   * @memberof MemberRequestSignup
   */
  certKey: string;
}
