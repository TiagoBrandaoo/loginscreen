export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "A caixa de e-mail está vazia"
  if (!re.test(email)) return 'Ooops! Você precisa de um e-mail válido!'
  return ''
}
