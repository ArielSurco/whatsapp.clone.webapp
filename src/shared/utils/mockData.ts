const randomUserNames: string[] = ['Steve', 'Tina', 'me']

export const getRandomUserName = (): string => {
  return randomUserNames[Math.floor(Math.random() * randomUserNames.length)]
}
