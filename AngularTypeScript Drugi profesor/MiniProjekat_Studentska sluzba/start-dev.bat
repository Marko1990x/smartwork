@echo off
title Development Server
color 0a
cls
::Start Dev Server
echo Starting Development Server..
cd toolkit
call npm start
cd ..
echo Done!