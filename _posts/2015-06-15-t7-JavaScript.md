---
layout: post
title:  Javascript versus Ruby
date:   2015-06-15 12:00:00
technical: true
categories: Javascript Ruby
tags: Javascript Ruby
---


<p>We dived into the world of Javascript last week. Compared to Ruby, Javascript has limited built-in functions, so it took a few more steps to solve a problem. This is good too as it gives me more opportunity to actually "solve" the problem. </p>

<p>What is the difference between Ruby and Javascript? Now that I have decent exposure to both languages, I'm going to compare some features of the two languages.</p>

<p>In Ruby, almost everything is an object and each object has associated class object methods; in Javascript, we have primitive (data type that is not an object and has no methods) data type such as <code>String</code>, <code>Number</code>, <code>Boolean</code>,  <code>Null</code>,  <code>Undefined</code>, <code>Symbol</code> (which is new in ECMAScript 6), and <code>Object</code>.</p>

<p>Even though Javascript, calls the <code>String</code>, <code>Number</code>, etc. as data type, its behaviors are similar to the <code>String</code> object, <code>FixedNumber</code> object, etc. in Ruby. See the tables below for a comparison of the definition and how it is called.</p>

<table border="1px">
<thead>

    <tr>
        <th>Type</th>
        <th>Javascript</th>
        <th>Ruby</th>
    </tr>
</thead>
<tbody>

    <tr>
        <td><code>String</code></td>  <!--Type-->
        <td>single or double quote: "thisIsAString" or 'thisIsAString'</td> <!--Javascript-->
        <td>single or double quote: "this_is_a_string" or 'this_is_a_string'</td> <!--Ruby-->
    </tr>

    <tr>
        <td><code>Array</code></td>  <!--Type-->
        <td>var arr = [1, 2, 3, 4];<br>
              index =  0  1   2  3<br>
              to access element at index 0, type arr[0]<br>
              accessing negative index is undefined, e.g. arr[-1] is not defined</td> <!--Javascript-->
        <td>   arr = [1, 2, 3, 4]<br>
        index =  0  1  2  3<br>
          to access element at index 0, type arr[0]<br>
          negative index is the last element, e.g. arr[-1] is the last element and arr[-2] is second to last, etc.</td> <!--Ruby-->
    </tr>

    <tr>
        <td><code>Hash</code> (or <code>Object</code>)</td>  <!--Type-->
        <td>var hash = {property1: 1, property2: 2}<br>
        can access 1 by calling hash["property1"] or hash.property1</td> <!--Javascript-->
        <td>hash = {property1: 1, property2: 2}<br>
        can access 1 by calling hash["property1"] or hash.property1</td> <!--Ruby-->
    </tr>
    <tr>
        <td><code>Number</code></td>  <!--Type-->
        <td>0, 1, 2, 3, 4.5, 5.2, etc.</td> <!--Javascript-->
        <td>Ruby uses Fixed Number for numbers that are smaller than certain value. If it is bigger, then it will use <code>BigNumber</code><br>
        Fixed Number can be an integer such as 1, 2, 3, 4 or float such as 1.2, 2.5, etc.</td> <!--Ruby-->  
    </tr>
    <tr>
        <td><code>Boolean</code></td>  <!--Type-->
        <td>true or false</td> <!--Javascript-->
        <td>true or false</td>  <!--Ruby-->  
    </tr>
</tbody>
</table><br>
