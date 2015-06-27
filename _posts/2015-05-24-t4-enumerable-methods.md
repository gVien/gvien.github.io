---
layout: post
title:  The Cycle Method!
date:   2015-05-24 12:00:00
technical: true
categories: Ruby #Cycle
tags: Ruby #Cycle
---


<p>
  This week we dive further into Ruby, solving more problems. The problems were not so bad since I had some experience with solving similar problems in the pass at <a href="http://coderbyte.com">Coderbyte</a>. I got a chance to dig deeper into the method world of Ruby. I am given three choices of <code>enumerable methods</code>(<code>map</code>, <code>group_by</code>, and <code>cycle</code>) to choose from to write about and the method <code>cycle</code> seems to interest me. We will cover that here.
</p>
<p><img src="../../../../../../assets/images/cycle_method.png" style="width:573px;height: 342px"><br>According to <a href="http://ruby-doc.org/core-2.2.2/Array.html#method-i-cycle">Ruby Docs on Cycle</a> the <code>cycle</code> method calls a block for each element <code>n</code> times or forever if <code>n</code> is not specified.
</p>
<p>
We can calculate the sum of all numbers using this method. For example:

{% highlight ruby %}
arr = [1,2,3,4,5,6,7,8,9,10]
sum = 0  #starting point
arr.cycle(1){|x| sum = sum + x}
sum    #=> 55
{% endhighlight %}

Of course, we can also increase the number of cycles to 2 and this would repeat and we will <code>sum=110</code> as the result. In addition, we are not limited to the addition operator. We can also use other mathematical operation such as multiplication. For instance:

{% highlight ruby %}
arr = [1,2,3,4,5,6,7,8,9,10]
multiply = 1 #starting point
arr.cycle(1){|x| multiply = multiply * x}
multiply    #=> 3628800      
{% endhighlight %}

<p>
We can also use this method to also join a string.

{% highlight ruby %}
words_arr = ["I", "like", "to", "code", "in", "Ruby"]
sentence = "" #starting point as empty string
words_arr.cycle(1){|word| sentence = sentence + " " + word}
sentence.strip   #=> "I like to code in Ruby"
{% endhighlight %}

The <code>strip</code> method removes the white space before and after the sentence (in this case, before).
</p>
<p>
The possiblity to use the <code>cycle</code> method is endless and what I have described is only a teaser. I hope you enjoy this little session.

Thank you for reading!
</p>