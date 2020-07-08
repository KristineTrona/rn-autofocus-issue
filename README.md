# rn-autofocus-issue

## To reproduce the issue:
1. Go from Onboarding screen to Login Screen - text input gets focused correctly
2. Go from LoginScreen to App
3. Go from App to LoginScreen - text input no longer gets autofocused.

While reproducing the issue I found that calling ``Keyboard.dismiss()`` before navigating to App makes the textInput no longer autofocs.

The ``Keyboard.dismiss()``, however is a necessary step, when ``animationEnabled: false`` is present in screenOptions in the navigator. Otherwise the keyboard remains open. 
