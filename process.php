<?php

$adatok = json_decode(file_get_contents("php://input"));

$errors = [];

if(strlen($adatok->name) < 4) {
    $errors[] = 'A név nem elég hosszú!';
}

if( filter_var($adatok->email, FILTER_VALIDATE_EMAIL) == false) {
    $errors[] = 'Az email nem megfelelő!';
}

if(strlen($adatok -> password) < 4) {
    $errors[] = 'A jelszó nem elég hosszú!';
}

if( $adatok -> password != $adatok -> password_confirmation) {
    $errors[] = 'A jelszó nem eggyezik!';
}

if(count($errors) > 0) {
    print json_encode(['status'=>'error', 'errors' => $errors]);
}

else {
    print json_encode(['status'=>'success', 'message' => 'Sikeres regisztráció']);
}