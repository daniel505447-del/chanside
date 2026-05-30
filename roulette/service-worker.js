// no-op service worker (오프라인 캐싱 없이 등록만 정상 처리해 404/콘솔에러 방지)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
// fetch 핸들러 없음 → 모든 요청은 네트워크로 그대로 통과 (캐시 간섭 없음)
