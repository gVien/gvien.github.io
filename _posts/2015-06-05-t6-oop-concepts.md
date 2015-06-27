---
layout: post
title:  Blocks, Procs, and Lambdas
date:   2015-06-05 12:00:00
technical: true
categories: Ruby Blocks Procs Lambdas
tags: Ruby Blocks Procs Lambdas
---

<h3>What are blocks, Procs, and Lambdas in Ruby? </h3>
<p>
  If you have used Ruby build-in methods before then you probably use blocks. Blocks is basically a set of codes inside a method that accepts a block. For examples:
</p>

{% highlight ruby %}
[1,2,3,4,5].map {|x| 2*x}                       #=> [2,4,6,8,10]
[1,2,3,4,5].reduce do { |sum, element|
 sum +=element
 }                                              #=> 15
{% endhighlight %}

In the first example, the code `2*x` is a block inside the map method. It is between the <code>{</code> and <code>}</code>. In the second example, the code <code>sum +=element</code> is a block within the <code>do...end</code> syntax.

<p>
Keep in mind that blocks are not objects (one of the few exceptions in Ruby!) as they cannot be stored in a variable. In order make it a block, we need to convert it to a Procs or Lambdas which we will get to in a few minutes.
</p>
<h3>Why do some methods take blocks while others don't?</h3>
<p>
  That's because the methods that take a block use a concept called <code>yield</code> to yield to a block inside the method definition. Let's do an example to demonstrate the <code>yield</code> concept.
</p>

{% highlight ruby %}
def yielding_a_block
 puts "I am a inside a method"
 yield
 puts "I have returned inside the method"
end
{% endhighlight %}

<p>Now let's add a block inside this method and call it!</p>

{% highlight ruby %}
yielding_a_block {puts "I am a block, surprise?"}
>>
I am a inside a method
I am a block, surprise?
I have returned inside the method
{% endhighlight %}

<p>Of course, you can always use a parameter in the method and pass the parameter into yield.</p>

{% highlight ruby %}
def yielding_a_block_with_para(name)
 puts "I am a inside a method"
 yield(name)
 puts "I have returned inside the method"
end
 
yielding_a_block_with_para("Reader") {|para|puts "I am a block with parameter. Are you surprise, #{para}?"}
>>
I am a inside a method
I am a block with parameter. Are you surprised, Reader?
I have returned inside the method
{% endhighlight %}

<p>The live codes can be accessed <a href="http://repl.it/rJk">here</a>. Just click "run" and you will see the magic!
</p>
<h3>Procs and Lambdas are Saved Blocks!</h3>
<p>
  As mentioned earlier, blocks are not objects since they exist inside a method that cannot be saved in a variable. This means we cannot reuse the blocks in other methods (also known as the DRY or Do Not Repeat principle) in our program.
</p>
<p>
  So, what are Procs? Procs is basically a "saved" block. There is more to it than that but for now, let's leave it at that. You create a <code>Proc</code> by using <code>Proc.new</code>. Let's redo the <code>map</code> and <code>reduce</code> examples above using Procs. 
</p>

{% highlight ruby %}
times_2 = Proc.new {|x| 2*x}
[1,2,3,4,5].map(&times_2)                           #=> [2,4,6,8,10]
[6,7,8,9,10].collect(&times_2)                      #=> [12, 14, 16, 18, 20]
[6,7,8,9,10].map(&:to_s)                            #=>["6", "7", "8", "9", "10"]

add_all = Proc.new{|total, element| total+=element}
[1,2,3,4,5].reduce(&add_all)                        #=> 15
{% endhighlight %}

  <p>
    As you can see the, I inserted the saved Procs (or block) into the map and reduce methods by adding <code>&</code> symbol. In Ruby, the symbol <code>&</code> converts a proc into a block. It can also be used to convert a symbol into procs which was done to convert all the numbers into string above. In addition, as shown in the map and collect methods, the proc was reused. This is one of the advantageous of using a proc to store a block.
  </p>
  <p>
    You can also call the Proc directly by using <code>call</code> method.
  </p>

{% highlight ruby %}
hello = Proc.new {|a| puts "I am a saved block inside a Proc!"}
hello.call
>>"I am a saved block inside a Proc!"
{% endhighlight %}

<p>
  See how easy it is? you can also played with the live codes <a href="http://repl.it/rK8">here</a>.
</p>
<p>
  Let's dive into <code>Lambda</code>. Lambdas are objects, just like Procs! Here is how to define lambda.
</p>

{% highlight ruby %}
lambda_example = lambda { puts "I am inside a lambda"}
to_string = lambda {|para| para.to_s}
[6,7,8,9,10].map(&to_string)                          #=>["6", "7", "8", "9", "10"]
{% endhighlight %}

<p>
  Lambda works almost identical to Procs. One of the two major differences (besides the syntax) is lambda cares about the number of arguments being passed inside a block, such as <code>para</code> above. If you put in the wrong number of arguments, lambda will give you an <code>ArgumentError</code>. On the other hand, Procs is more easy going and would ignore it and assign a <code>nil</code> to any arguments missing.
</p>
<p>
  Another major difference is that when you use <code>return</code> inside a lambda and call it, it will pass the control back to the calling method. If you use <code>return</code> inside a Proc, the return works immediately without passing the control back to the calling method. We can understand this better with two examples.
</p>

{% highlight ruby %}
def proc_calling_method
 proc_call = Proc.new {return "I am a block inside a Proc, call me!"}
 proc_call.call
 puts "Can you see me after pro_calling_method is called?"
end
p proc_calling_method
>>"I am a block inside a Proc, call me!"
 
def lambda_calling_method
 lambda_call = lambda {return "I am a block inside a lambda, call me!"}
 lambda_call.call
 puts "Can you see me after lambda_calling_method is called?"
end
p lambda_calling_method
>>"Can you see me after lambda_calling_method is called?"
{% endhighlight %}

<p>
  You can view the live codes <a href="http://repl.it/rKn">here</a>. 
  Hope you learn a lot from reading this. Thanks for reading!
</p>
