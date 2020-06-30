#!/bin/bash

PATH="`pwd`"
FILE="/exe4.sh"

# echo "$PATH$FILE"

if [ -e $PATH$FILE ]
    then
        echo "O caminho $PATH$FILE está habilitado."
        if [ -w $PATH$FILE ]
            then
                echo "Você tem permissão para editar $FILE"
            else
                echo "Você NÃO foi autorizado a editar $FILE"
        fi
    else
        echo "Path/File error."
fi