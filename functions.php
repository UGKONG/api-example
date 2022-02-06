<?php

function err($txt) {
  $text = $txt ? $txt : 'none';
  return json_encode(['data' => 'null', 'result' => false, 'reason' => $text]);
}