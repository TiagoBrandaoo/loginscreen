export function passwordValidator(password) {
  if (!password) return "A caixa de senha está vazia!"
  if (password.length < 5) return 'A senha deve ter pelo menos 5 caracteres.'
  return ''
}
