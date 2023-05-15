# phase1project

## Goal
Create a simple site to query DnD spells based on criteria, 
  and be able to easily delete unwanted spells from the window.

## Use Case
  Assist in deciding what spells to take in DnD when creating 
    a character, leveling up a character, or completing a rest
    that allows you to choose new spells
   Using the Player's Handbook it is often frustrating because
    the list of spells available to a given class are listed
    seperately from the actual descriptions of the spells. This 
    is a much more convenient way to browse spells.

This respository's code generated a website that used the DnD5e API
  to let the user query the spells available to them given a 
  character class, spell school of magic, and spell level.
  
Each card represents a spell returned by the query.
  A spells card will contain the spell's name, level,
  school of magic, 'concetration required' if concentration
  is need to use the spell, and a description on the spell.
  
Hovering over a spell card slightly enlarges it, and
  the card can be scroll within if the spell description
  doesn't fit in visible area
  
 NOTE: CLICKING A CARD WILL DELETE IN FROM THE DOM
 
