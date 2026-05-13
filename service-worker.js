// service-worker.js — Pinky Promise Nail Club
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBxtl_lc9b6zS-6ld-LMGcBAyk6XjQ7vck",
  authDomain: "nail-projects.firebaseapp.com",
  databaseURL: "https://nail-projects-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nail-projects",
  storageBucket: "nail-projects.firebasestorage.app",
  messagingSenderId: "923664169473",
  appId: "1:923664169473:web:16f3c712ddd4d3400d9e00"
});

const messaging = firebase.messaging();

// Notificaciones en background (app cerrada o en segundo plano)
messaging.onBackgroundMessage(payload => {
  const { title, body } = payload.notification || {};
  self.registration.showNotification(title || 'Pinky Promise', {
    body: body || '',
    icon: '/PinkyPromise/icon-192.png',
    badge: '/PinkyPromise/icon-192.png',
    vibrate: [200, 100, 200]
  });
});

// Cache
const CACHE = 'pinkypromise-v5';
const ASSETS = ['/PinkyPromise/', '/PinkyPromise/index.html', '/PinkyPromise/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (
    e.request.url.includes('firebase') ||
    e.request.url.includes('googleapis') ||
    e.request.url.includes('gstatic') ||
    e.request.url.includes('fonts.') ||
    e.request.url.includes('cdnjs')
  ) {
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
