<?php
include('./modules/functions.php');
$conn = mysqli_connect('localhost', 'root', '569800', 'sanguk');

$task = $_POST['task'];

switch ($task) {
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
    $result = json_encode(['data' => $set[0], 'result' => true]);
    print_r($result);
    break;
  case 'test':
    echo json_encode(
      ['data' => 'test', 'result' => 'success']
    );
    break;
  default:
    echo err('task명이 잘못되었습니다.');
    break;
}

mysqli_close($conn);
?>