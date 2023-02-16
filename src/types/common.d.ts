interface RequestSongURLParams {
  openid: string; // 设备id eg: e09f7d00e9ace49e
  real_song_id: string;
  is_clip: 0 | 1; // 0 非片段；1 片段
}
