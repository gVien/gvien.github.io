---
layout: post
title:  Hash vs Array
date:   2015-05-17 12:00:00
technical: true
categories: Technical
tags: SharePoint Designer
---


This week we dive into hash and array in Ruby. Both objects are collections of things such as cars, numbers, etc. However, they are different in many ways. Knowing which one to use to store your data may help you solve problems faster. 

Back in your algebra class, you commonly used variable `x` to store a number after you solve a simple equation such as the one below.

{% highlight ruby %}
2x+3 = x
x = -3
{% endhighlight %}


Now if you need to store multiple items in a variable, what do you use?
You guessed it right! you would use an `array`

<h2>What is an Array in Ruby?</h2>

An array is basically a collection of things such as array (yes you can store an array in an array, hash, number, string, boolean, etc.). Whatever you put in an array will come out as it is when you call it in Ruby; it is not display in order. You store a collection in an array between an opening bracket `[` and a closing bracket `]`.
For example: 

{% highlight ruby %}
An array of number: array = [1,3,5,10]
An array of string: array = ["one","apple","orange"]
A multi-dimensional array: array = [1,2,3,[2,5],["love","to","code"]]
{% endhighlight %}

Note that the variable `array` may be any variable such as `x`

How do we access the element in Array using Ruby?

By definition, each element of an array is associated with an index, starting from 0. See below:

{% highlight ruby %}
Array: ["banana","apple","orange"]
Index: [   0    1      2]
{% endhighlight %}

We would access the element `"banana"` by calling the array at index 0. For example:

{% highlight ruby %}
array[0] => "orange" #or
array[1] => "apple"
{% endhighlight %}

In Ruby, there are countless methods (or in layman term, step by step instructions) to manipulate elements in arrays. You call a method on a variable by using the dot `.`. The variable is the receiver of the method.

For examples, you can use `length` method to get the number of elements in an array. Or a more advanced one, <code>select</code> method to filter out any element that you desire. For examples:

{% highlight ruby %}
Using length method: [2,5,"apple"].length 			#=> returns 3
Using select method: [10,1,2,9].select {|x| x>5} 	#=> [10,9]
{% endhighlight %}

Of course, in Ruby there are countless fancy methods like the one above. You can learn more about them through here 
[Array Methods][array method].

[array method]: http://ruby-doc.org/core-2.2.1/Array.html#

<h2>What is a Hash in Ruby?</h2>
<p>
Each element of an array is associated with an index number, starting from 0. What if you do not want index of numbers? What if you want to associate each element with other things, such as names of fruits, cars, etc.
</p>
<p>
Hash gives you the ability to do that. Hash is defined by the open braces <code>{</code>and closing braces<code>}</code>. A hash is made up of two component, one is called a <code>key</code>and the others is called a <code>value</code>. This is why they are called <code>key-value</code>pair, much like the "index-value" (I made up this name) pair in array. In Ruby, we define the key first then the value, each separated by the rocket symbol <code>=></code> or in later version 1.9.3 of Ruby you get to replace that with a colon <code>:</code>. These examples below will clarify:

{% highlight ruby %}
hash1 = {"key1"=>"value1","key2"=>"value2","2":"apple" }
hash2 = {"1":"one";"2":"two","3":"three"}
{% endhighlight %}

</p>
<h3>How do we access the element in a hash using Ruby?</h3>
<p>
Access the hash is pretty much like accessing an element in array. You can think of the key as the "index". For example:

{% highlight ruby %}
hash1["key1"]  #=> "value1"
hash2["2"]     #=> "two"
{% endhighlight %}
</p>
<p>
You may use the same <code>length</code>method to get the number of elements in the hash above or you can use <code>select</code>method to filter out the key or value that you desire. For more information about methods in hash, visit <a href="http://ruby-doc.org/core-2.2.1/Hash.html#">Hash Methods</a>
</p>
<h2>So which one should you use?</h2>
<p>
This is rather an open-ended question since each one has its advantages and disadvantages. It is more practicle to store numbers in an array. If you are defining an object such as a book, you might want to use hash to store its properties such as size, author, title, etc. inside the hash.
