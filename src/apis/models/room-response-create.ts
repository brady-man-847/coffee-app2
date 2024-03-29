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
 * 방 생성 결과
 * @export
 * @interface RoomResponseCreate
 */
export interface RoomResponseCreate {
  /**
   *
   * @type {number}
   * @memberof RoomResponseCreate
   */
  sn: number;
  /**
   *
   * @type {string}
   * @memberof RoomResponseCreate
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof RoomResponseCreate
   */
  status: RoomResponseCreateStatusEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum RoomResponseCreateStatusEnum {
  CLOSED = 'CLOSED',
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
