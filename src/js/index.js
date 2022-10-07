import { Router } from './router.js'

const router = new Router()

router.add("/", "src/pages/home/index.html")
router.add("/universe", "src/pages/universe/index.html")
router.add("/exploration", "src/pages/exploration/index.html")
router.add(404, "src/pages/errorPage/index.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()