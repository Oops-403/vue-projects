import axios from 'axios';
import { getBaseApiURL } from '@/config';

const request = axios.create({ baseURL: getBaseApiURL() })
request.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
request.defaults.timeout = 2500


interface RequestResponse<T> {
    status: boolean;
    data: T;
}

const get_ = <T>(url: string, params?: any) => {
    return request.get(url, { params }).then((res: any) => res.data as RequestResponse<T>)
}

const post_ = <T>(url: string, data?: any) => {
    return request.post(url, data).then((res: any) => res.data as RequestResponse<T>)
}

export interface OptionItem {
    option_id: number;
    option: string;
    is_answer: string;
}
export interface TopicItem {
    song_id: number;
    real_song_id: number;
    song_name: string;
    option_list: OptionItem[];
    tips: string;
}
export const getTopicList = (level: 1 | 2 | 3) => get_<TopicItem[]>(`get_song_list?level=${level}`)

export interface ScoreStatRes {
    luck_mark_number: number;
    remaining_times: number;
    vip_price: number;
    tips_number: number;
}
export const getScoreStat = (openid: string) => get_<ScoreStatRes>(`get_guess_stat?openid=${openid}`)

export interface AnswerParams {
    is_vip: boolean;
    song_id: number;
    option_id: number;
    openid: string;
}
export interface AnswerRes {
    get_luck_mark: boolean;
    luck_mark_id: number;
    tips_number: number;
    remaining_times: number;
    vip_price: number;
    is_right: boolean;
}
export const postAnswer = (data: AnswerParams) => post_<AnswerRes>('post_answer', data)

export interface ConsumeChanceParams {
    openid: string;
}
export interface ConsumeChanceRes {
    remaining_times: number;
}
export const postConsumeChance = (data: ConsumeChanceParams) => post_<ConsumeChanceRes>('consume_chance', data)


export const getClaimedResult = (openid: string) => get_<{ has_received: boolean }>(`id=${openid}`)

export interface ClaimVipParams {
    openid: string;
}
export const postClaimedVip = (data: ClaimVipParams) => post_<any>('g/receive_free_vip', data)

export const getStickerList = (openid: string) => get_<number[]>(`get_luck_mark_list?openid=${openid}`)

export interface ConsumeTipsParams {
    openid: string;
}
export const consumeTips = (data: ConsumeTipsParams) => post_<{ tips_number: number }>('/consume_tip', data)

export interface RequestSongURLParams {
    real_song_id: string | number;
    openid: string;
    is_clip: 0 | 1;
}
export interface RequestSongURLRes {
    play_url: string;
}
export const getSongURL = (params: RequestSongURLParams) => get_<RequestSongURLRes>(`get_play_url?real_song_id=${params.real_song_id}&openid=${params.openid}&is_clip=${params.is_clip}`)

interface CanBuyVipRes {
    can_buy_vip: boolean;
}
export const canBuyVip = (openid: string) => get_<CanBuyVipRes>(`/can_buy_vip?openid=${openid}`)
