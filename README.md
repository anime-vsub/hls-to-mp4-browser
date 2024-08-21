# hls-to-mp4-browser

To install dependencies:

```bash
bun install
```

To run:

```typescript

/**
 * Converts an HLS (HTTP Live Streaming) manifest to an MP4 file.
 *
 * @param {string} m3u8Content - The content of the HLS manifest file.
 * @param {(url: string) => Promise<Uint8Array>} fetchFile - A function to fetch a file from a URL.
 * @param {(current: number, total: number, timeCurrent: number, timeDuration: number) => void} onProgress - A callback function to report the progress of the conversion.
 * @param {number} [concurrency=20] - The number of concurrent downloads.
 * @param {RetryOptions} [retryOptions] - Options for retrying failed downloads.
 * @return {Promise<FileData>} The MP4 file data.
 */
async function convertHlsToMP4(
  m3u8Content: string,
  fetchFile: (url: string) => Promise<Uint8Array>,
  onProgress: (
    current: number,
    total: number,
    timeCurrent: number,
    timeDuration: number,
  ) => void,
  concurrency = 20,
  retryOptions?: RetryOptions,
): Promise<FileData>
```