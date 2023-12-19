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
 * 회원 정보
 * @export
 * @interface MemberDto
 */
export interface MemberDto {
  /**
   *
   * @type {string}
   * @memberof MemberDto
   */
  nickname: string;
  /**
   *
   * @type {string}
   * @memberof MemberDto
   */
  username: string;
  /**
   *
   * @type {string}
   * @memberof MemberDto
   */
  phone: string;
  /**
   *
   * @type {string}
   * @memberof MemberDto
   */
  role: MemberDtoRoleEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum MemberDtoRoleEnum {
  USER = 'USER',
  ADMIN = 'ADMIN',
}
