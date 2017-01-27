---
layout: article
title: "Getting started with HTML"
categories: articles
tags: [html]
comments: false
excerpt: "A ton of text to test readability."
image:
  teaser: 480px-HTML5_Badge.jpg
---

![HTML code screenshot for heading]({{ site.baseurl }}/images/html.jpg)

{% include toc.html %}

<!-- 
**Inverse Noticed:** `.notice-invderse` narwhal[^footnote] Maecenas ornare tortor. Donec sed tellus [eget sapien fringilla](#) nonummy. Mauris a ante. Suspendisse quam sem, consequat at.
{: .notice-inverse}

[^footnote]: Hashtag artisan skateboard, flannel Bushwick nesciunt salvia aute fixie do plaid post-ironic dolor McSweeney's.

**Info Notice:** `.notice-info` [Maecenas ornare tortor](#). Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at.
{: .notice-info}

**Warning Notice:** `.notice-warning` Maecenas ornare tortor. Donec sed [tellus eget](#) sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at.
{: .notice-warning}

**Danger Notice:** `.notice-danger` Maecenas ornare tortor.[ Donec sed tellus](#) eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at.
{: .notice-danger}

**Success Notice:** `.notice-success` Maecenas ornare tortor. Donec sed tellus eget [sapien fringilla](#) nonummy. Mauris a ante. Suspendisse quam sem, consequat at.
{: .notice-success} -->

# What is this

Well HyperText Markup Language aka HTML is a language for creating web pages.  When you surfing through the internet and visiting dozens websites with your browser you actually don't see that HTML-code, but the way how browser "translates" it for you. Every web page you stumble upon on the internet contain HTML code. Each image, video and music file are brought to you with help of HTML. Let's take a better look on HTML and from what it's made.


_For the sake of simplicity from henceforth and further I'll be typing "html" abbreviation in lower case_


# First page

Les's create our first html page !

I'll be using [Sublime Text 3](https://www.sublimetext.com/3) to create files and edit code.  

![HTML code screenshot for heading](){:data-gifffer="{{ site.baseurl }}/images/Sublime_Create_Html_File.gif"}


# Watch the changes

# Basic structure
Even the simplest html page have some requirements to its structure.  
Long story short, let's look at it:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Page name</title>
	</head>
	<body>
		And it's body
	</body>
</html>
```

Right, so this is the very basic html structure. You might be surprised with all that weird brackets and words - no problem, let's split them up !

# The tags


First what we see is `<!DOCTYPE html>` - shortly, this how we describe the html that will be used in our page. You can get more info about it on [this](http://stackoverflow.com/a/414993/3472702) StackOverflow answer.

Then we see `<html>` tag, but please notice that we have same tag with slash in the end: `</html>`.  
This is how most html tags works - they get "opened" `<html>` and closed `</html>`. We open them by putting in arrow brackets`<like this>` and close it to with arrow brackets but we add slash symbol: `</like this>`.


But keep in mind that html have some self closing tags, which we don't have to close, I'll tell you about them a bit later.

One more this is that html tags can be nested, which means we can put tag in the tag in the tag in the tag...  
You've got the idea.

So, everything what we'll put between html tag is going to be processed with our browser.
And and this point we get ourselfs to our first nested tag in `<html>` -  `<head>`.
Head tag it is just like `<html>` tag - not self closing, which means we have to close it on our own. 

In html language `<head>` is responsible for many things like connecting style files and other code to our page and "talking" with browser. You may find `<head>` similar with our human head - which is responsible for thinking about stuff and make decisions.




# Headlines

# Text formatting

# Tables

# Styling

# Conclusion

```html
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

</body>
</html>
```