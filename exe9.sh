#!/bin/bash

INPUTS=$@ # @ para receber infinitos argumentos

for INPUT in $INPUTS
  do
    if [ -f $INPUT ]
      then
        echo "$INPUT é um arquivo."
    elif [ -d $INPUT ]
      then
        echo "$INPUT é um diretório."
    else
        echo "$INPUT não é arquivo e tampouco diretório."
    fi
  done