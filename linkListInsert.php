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

      public $head;  // head node 
      public $current; // current or end node
      public $temp;  // temp node
      public $tempHead; // 
      public $lastNode;

      public function __construct() {
          $this->head = NULL;
          $this->current = NULL;
      }

      // push data to the node
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

      // Insert a node after any node 
      public function insertAfterNode($prevNode, $value) {
          $this->tempHead = $this->head;
          if ($this->tempHead == NULL) {
              exit('No node found !');
          }
          while ($this->tempHead->data != $prevNode) {
              $this->tempHead = $this->tempHead->next;
          }
          echo "After  " . $this->tempHead->data . " add new node. <br>";
          $node = new Node($value);
          $node->next = $this->tempHead->next;
          $this->tempHead->next = $node;
      }

      // apend node at last
      public function append($param) {
          $this->lastNode = $this->head;
      }

      // display list 
      public function displayList() {
          $this->temp = $this->head;
          while ($this->temp != NULL) {
              echo $this->temp->data . ' ';
              $this->temp = $this->temp->next;
          }
      }

  }

  $list = new SingleLinkList();
  $list->push(10);
  $list->push(12);
  $list->push(15);
  $list->insertAfterNode(15, 13);
  $list->insertAfterNode(12, 11);
  $list->insertAfterNode(10, 12);
  $list->displayList();

  