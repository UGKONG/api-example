<?php
include_once('./modules/functions.php');
$conn = mysqli_connect('localhost', 'root', '569800', 'sanguk');
$task = $_POST['task'];

session_start();

switch ($task) {
  case 'isSession':
    $result = json_encode(
      ['data' => $_SESSION ?? null, 'result' => true]
    );
    print_r($result);
    return;

  case 'login':
    $id = $_POST['id'];
    $pw = $_POST['pw'];

    if ($id == '' || $pw == '') {
      echo err('id 또는 pw가 비었습니다.');
      return;
    }

    $sql = "SELECT * FROM user WHERE ID='{$id}' AND PW='{$pw}'";
    $query = mysqli_query($conn, $sql);

    if (!$query) {
      echo err('DB 정보를 불러오지 못했습니다.');
      return;
    }
    $set = array();
    while($row = mysqli_fetch_assoc($query)) {
      array_push($set, $row);
    }
    if (count($set) == 0) {
      echo err('일치하는 회원이 없습니다.');
      return;
    }
    
    $_SESSION['SN'] = $set[0]['SN'];
    $_SESSION['NM'] = $set[0]['NM'];
    $result = json_encode(
      ['data' => $set[0], 'result' => true]
    );
    print_r($result);
    break;

  case 'logout':
    session_unset();
    session_destroy();
    $result = json_encode(
      ['data' => 'Logout Success.', 'result' => true]
    );
    print_r($result);
    break;

  case 'test':
    echo json_encode(
      ['data' => 'test', 'result' => true]
    );
    break;

  default:
    echo err('task명이 잘못되었습니다.');
    break;
}

mysqli_close($conn);
?>