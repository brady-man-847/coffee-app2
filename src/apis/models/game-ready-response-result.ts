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

// May contain unused imports in some cases
// @ts-ignore
import { MemberDto } from './member-dto';

/**
 * 게임 준비 상태 rs
 * @export
 * @interface GameReadyResponseResult
 */
export interface GameReadyResponseResult {
  /**
   *
   * @type {MemberDto}
   * @memberof GameReadyResponseResult
   */
  memberDto: MemberDto;
  /**
   *
   * @type {number}
   * @memberof GameReadyResponseResult
   */
  roomSn: number;
  /**
   *
   * @type {string}
   * @memberof GameReadyResponseResult
   */
  gameType: GameReadyResponseResultGameTypeEnum;
  /**
   *
   * @type {string}
   * @memberof GameReadyResponseResult
   */
  readyStatus: GameReadyResponseResultReadyStatusEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum GameReadyResponseResultGameTypeEnum {
  PINBALL = 'PINBALL',
}
/**
 * @export
 * @enum {string}
 */
export enum GameReadyResponseResultReadyStatusEnum {
  READY = 'READY',
  UNREADY = 'UNREADY',
}