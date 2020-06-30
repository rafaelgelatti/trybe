#!/bin/bash

INPUT=$1

if [ -f $INPUT ]
    then
        echo "$INPUT é um arquivo."
        ls -la $INPUT
elif [ -d $INPUT ]
    then
        echo "$INPUT é um diretório."
        ls -la $INPUT
else
    echo "Error."
fi