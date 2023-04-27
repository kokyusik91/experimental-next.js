/**
 *
 * @param time 지연 시키고 싶은 시간
 * @returns Promise<number>
 */
export const delay = (time: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time)
    }, time)
  })
}
