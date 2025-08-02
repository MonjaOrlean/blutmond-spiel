import { inject, signal } from '@angular/core';
import { Router } from '@angular/router';

export const email = signal('');
export const passwort = signal('');
export const fehlermeldung = signal('');
export const passwortAnzeigen = signal(false);

const router = inject(Router);

// Funktion zum Umschalten der Passwortsichtbarkeit
export function togglePasswortsichtbarkeit(): void {
  passwortAnzeigen.update((v) => !v);
}

// Login-Funktion
export function login(): void {
  const emailWert = email();
  const passwortWert = passwort();

  if (!emailWert || !passwortWert) {
    fehlermeldung.set('Bitte fülle alle Felder aus.');
    return;
  }

  const istAdmin = emailWert === 'Admin' && passwortWert === 'Admin';

  const passwortGueltig = /^(?=.*[A-Z])(?=.*\d).{4,}$/.test(passwortWert);

  if (!istAdmin && !passwortGueltig) {
    fehlermeldung.set(
      'Das Passwort muss mindestens 4 Zeichen, 1 Großbuchstaben und 1 Zahl enthalten.'
    );
    return;
  }

  if (istAdmin || passwortGueltig) {
    fehlermeldung.set('');
    router.navigateByUrl('/charakter');
  } else {
    fehlermeldung.set('Ungültige Anmeldedaten.');
  }
}
