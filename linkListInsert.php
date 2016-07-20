<?php

  /*
   * To change this license header, choose License Headers in Project Properties.
   * To change this template file, choose Tools | Templates
   * and open the template in the editor.
   */

  // Node Class 
  class Node {

      public $data; // store node 
      public $next; // link to next node

      public function __construct($data) {
          $this->data = $data;
          $this->next = null;
      }

  }

  // show link list
  class SingleLinkList {

      public $head;
      public $current;
      public $temp;

      public function __construct() {
          $this->head = NULL;
          $this->current = NULL;
      }

      public function push($data) {
          $newNode = new Node($data);
          if ($this->head == NULL) {
              $this->head = $newNode;
              $this->current = $newNode;
          } else {
              $newNode->next = $this->head;
              $this->head = $newNode;
          }
      }

      public function displayList() {
          $this->temp = $this->head;
          while ($this->temp != NULL) {
              echo "List " . $this->temp->data;
              $this->temp = $this->temp->next;
          }
      }

  }
  
  $list=new SingleLinkList();
  $list.push(10);
  $list.push(12);
  $list.push(13);
  
