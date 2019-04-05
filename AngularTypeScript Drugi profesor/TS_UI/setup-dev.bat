@echo off
title Environment Initializator
color 0a
cls
echo Initializing Environment..
echo ==============================
echo .
:: Toolkit Setup
echo Installing Toolkit Packages..
cd toolkit
call npm i
cd ..
echo Done!
echo .
:: Server Setup
echo Installing Server Packages..
cd server
call npm i
cd ..
echo Done!
echo .
:: Typescript Definitions Setup
echo Installing TypeDefinitions for App..
cd app/typescript
call npm i
cd ..
cd ..
echo Done!
echo .
:: Client Dependency Setup
echo Installing Client Dependencies..
cd client
call npm i
cd ..
echo Done!
echo .
echo ==============================
echo Instalation Complete!
echo If any errors were reported please make sure npm, node and gulp are installed.
echo If errors still persist, consider putting pause per section to trace the issue.
pause