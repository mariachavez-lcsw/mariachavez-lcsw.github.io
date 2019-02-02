---
title: Google Translate Gem
date: 2018-07-15 05:27 UTC
tags: [api, ruby, gem]
---
#Google Translate Gem
## Gem

<code>
  gem 'google-cloud-translate'
</code>

Like many other rails apps the first thing to do is to include the google translate gem.

## Bundle

<code>
  bundle
</code>

Make sure to run bundle in terminal.

## Create Module

<code>
  touch lib/google_translate.rb
</code>

Add a new file to your lib folder.

## The Code

<code>
  <p>
  require "google/cloud/translate </br>
  module GoogleTranslate </br>
  &nbsp;def self.translate_text(text, to = 'en') </br>
  &nbsp;&nbsp;begin </br>
  &nbsp;&nbsp;&nbsp;translate = Google::Cloud::Translate.new project: PROJECT_ID, key: API_KEY </br>
  &nbsp;&nbsp;&nbsp;translation = translate.translate text, to: to </br>
  &nbsp;&nbsp;&nbsp;return translation.text </br>
  &nbsp;&nbsp;rescue Google::Cloud::Error => e </br>
  &nbsp;&nbsp;&nbsp;puts e.message </br>
  &nbsp;&nbsp;end </br>
  &nbsp;&nbsp;puts "Text was not translated correctly. Returning original text" </br>
  &nbsp;&nbsp;text</br>
  &nbsp;end </br>
  end </br>
  </p>
</code>

Add the following to your new file. You will need to replace PROJECT\_ID and API\_KEY with your very own authentication.

## The Output

<code>
  <p>
    rails c</br>
    [1] pry(main)> GoogleTranslate.translate_text('hola')</br>
    => "Hello"</br>
  </p>
</code>

'hola' was correctly translated to 'hello'.

\-dvcv
