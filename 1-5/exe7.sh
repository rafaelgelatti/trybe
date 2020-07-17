#!/bin/bash

INPUT=$1

if [ ! -d $INPUT ]
    then
        echo "O argumento $INPUT não é um diretório."
    else
        FILES=`ls -l $INPUT | wc -l`
        echo "O $INPUT tem $(($FILES-1)) arquivos."
        # Na verdade aqui conta quantas linhas, eu diminui uma porque a 1a linha é o próprio diretório.
fi