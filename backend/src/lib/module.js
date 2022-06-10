export default function makeModule({ controller, services = [] }) {
  const module = new controller(...services)
  const methods = Object.getOwnPropertyNames(
    Object.getPrototypeOf(module)
  ).filter((method) => method !== 'constructor')

  for (const method of methods) {
    module[method] = module[method].bind(module)
  }

  return module
}
