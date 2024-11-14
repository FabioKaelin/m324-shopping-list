# Reflexion - Fabio und Shansai

## Überblick über die Pipeline

In diesem Projekt habe ich eine CI/CD-Pipeline mit GitHub Actions erstellt, die aus drei Hauptphasen besteht: **Lint**, **Test** und **Deploy**. Jede dieser Phasen hat eine spezifische Funktion, um die Codequalität und Zuverlässigkeit zu gewährleisten.

### 1. Lint-Job

Der Linting-Schritt stellt sicher, dass der Code den festgelegten Stil- und Codierstandards entspricht, bevor weitere Schritte durchlaufen werden. Ich habe Caching verwendet, um die Pipeline zu beschleunigen, indem die Node-Module zwischengespeichert wurden, was die Installationszeit der Abhängigkeiten verkürzt.

**Warum dieser Schritt?**
Linting hilft dabei, Syntaxfehler, undefinierte Variablen und Stilprobleme frühzeitig im Entwicklungsprozess zu erkennen, was Fehler im Produktionscode minimiert.

### 2. Test-Job

Der Testschritt läuft nach dem Linting und validiert den Code durch Unit- oder Integrationstests. Sollte ein Test fehlschlagen, wird die Pipeline hier gestoppt, um sicherzustellen, dass der Code nur weitergeführt wird, wenn er den Projektanforderungen entspricht.

**Warum dieser Schritt?**
Tests stellen sicher, dass der Code wie erwartet funktioniert und keine neuen Fehler eingeführt werden. Dies ist ein wesentlicher Schritt, um die Codequalität langfristig zu sichern.

### 3. Deploy-Job

Der Deploy-Schritt wird nur ausgeführt, wenn die vorherigen Schritte (Linting und Testing) erfolgreich abgeschlossen wurden. Dieser Schritt simuliert einen Bereitstellungsprozess, bei dem der Code gebaut und in eine Staging- oder Produktionsumgebung übertragen werden könnte.

**Warum dieser Schritt?**
Automatisierte Bereitstellung ist wichtig für eine kontinuierliche Auslieferung. Die Automatisierung des Deployments beschleunigt den Prozess, reduziert Fehler und gewährleistet konsistente Releases.

## Reflexion und Verbesserungsvorschläge

Rückblickend auf dieses Pipeline-Setup ergeben sich einige Beobachtungen und mögliche Verbesserungen:

1. **Caching-Länge**: Der Caching-Prozess geht bei einem von unserem Tests 2 Minuten währent das installieren der Node-Modules nur 9 Sekunden dauert. Dies ist nicht effizient und könnte optimiert werden.
2. **Deployen**: Aktuell wird der Code nur gebaut und nicht wirklich deployt. Es wäre sinnvoll, eine echte Deployment-Strategie zu implementieren, um den Code in einer echten Umgebung zu testen. Es muss jedoch unbedingt darauf geachtet werden, das diese Pipeline nicht in die Produktionsumgebung deployt, da es auf einen `push` auf den `main` Branch reagiert, was zu ungewollten Deployments führen könnte.

### Fazit

Diese Pipeline bietet eine solide Grundlage zur Automatisierung von Codequalitätsprüfungen und Deployment, aber es gibt Raum für Verbesserungen. Durch regelmässige Überprüfung und Anpassung der Pipeline können wir die Effizienz und Zuverlässigkeit der CI/CD-Prozesse weiter steigern.
