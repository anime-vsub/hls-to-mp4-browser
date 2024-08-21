import { fetchFile } from "@ffmpeg/util"

import content from "./media.m3u8?raw"
import { convertHlsToMP4 } from "../lib/convert-hls-to-mp4"

console.time()
await convertHlsToMP4(
  content,
  (url) => fetchFile(url),
  (current, total, currentTime, currentTotal) => {
    console.log({ current, total, currentTime, currentTotal })
  },
  20,
)
console.timeEnd()
