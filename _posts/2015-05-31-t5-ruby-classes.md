---
layout: post
title:  Understanding Ruby Classes
date:   2015-05-31 12:00:00
technical: true
categories: Ruby Class
tags: Ruby Class
---


This week we dive further into Ruby classes! Ruby classes are powerful stuff! (other object-oriented languages are powerful too!). It can be used to model so many things in the real world such as a calculator, bingo game, food, etc.

<h3>What is a class in Ruby?</h3>

Everything in Ruby is an object. An object can be a number, string, array, hash, etc.. Each one of those aformentioned objects falls in a class such as Fixnum class (for integer number), String class (for string object), Array class (for array object), and Hash class (for hash object). Each class has methods that can be used to perform an action on the object (you can picture methods as verbs and objects as nouns). For example, if I have an object <code>"Ruby"</code> which belongs to the class <code>String</code> and this class contains a method called <code>length</code> to ask for the length (or specifically the number of character in the string) of <code>"Ruby"</code>. I would get 4 which is the attribute (or data) that I get from using the method <code>length</code>:<pre>"Ruby".length     #=>4 </pre>
which returns the 4.

As you can see, the <code>String</code> class contains methods to produce attributes when it is used to perform an action on an object. In general, class is just a way to organize and produce objects with similar attributes and methods.

<h3>Ruby Class Examples</h3>

Let's make a class <code>Book</code> to show the world how many books you have on your shelf!

In Ruby, we make a class by first using <code>class</code> and then the name of the class. We end the class by using <code>end</code>. For example:

{% highlight ruby %}
class Book
end
{% endhighlight %}

Note that the first letter of your class name has to be capitalized. This is the convention in Ruby!

Next, we need to initilize all the variables that we need to define this book shelf. In Ruby, there are several variable types. We will discuss two in here for our purpose.

The first one is a <code>local variable</code>. This variable is define with a lower case font. For example:
<pre>book_type = "horror"</pre>
<pre>num = 5</pre><br>

Class contains many methods and each method contains many local variables. The local variable in a method of a class cannot be accessed by other methods. This is why we need a variable called <code>instance variable</code>.

Instance variable is a variable that can be access within a class regardless where the method is (e.g. in a method). The local variable can be converted into an instance variable by adding the symbol <code>@</code> in front of it. For example:
<pre>@book_type = "horror"</pre>
<pre>@num = 5</pre>

Now you know about these two variables, we can start initializing our class, which populating our class with variables so we can start our books.

{% highlight ruby %}
class Book
 def initalize(book_count, title, genre)
   @book_count = book_count
   @title = title
   @genre = genre
 end
end
{% endhighlight %}

What can we do with our <code>Book</code> class? we can create a method to check how many books you current have. We can also create a method to add more books in the title. For example:

{% highlight ruby %}
class Book
 def initalize(book_hash, title, genre)
   @book_hash = book_hash
   @title = title
   @genre = genre
   @book_count = 0
 end
 
 def count_book
   @book_count
 end
 
 def add(title)
   #you can add more books into the @book_hash here  
 end
 
 def remove(title)
   #you can remove a book from @book_hash that you remove from your book  
 end
end
{% endhighlight %}

As you can see as we do a lot of things within our book class here. The possibility is endless.
