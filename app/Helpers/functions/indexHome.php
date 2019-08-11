<?php
/**
 * Notes:
 * File name:${fILE_NAME}
 * Create by: Jay.Li
 * Created on: 2019\7\29 0029 16:08
 */
function getRouteName()
{
    $action = request()->route()->getAction();
    $name = $action['as'];

    $number = 0;
    switch ($name) {
        case 'home':
            $number = 1;
            break;
        case 'home.ask.index':
        case 'home.ask.create':
        case 'home.ask.details':
            $number = 2;
            break;
    }

    return $number;
}
