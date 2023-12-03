#!/bin/bash

npm install
npm run db:migrate
npm run prisma:generate
npm run build