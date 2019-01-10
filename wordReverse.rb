def reverse_words(string)
  left_index = 0
  right_index = string.length-1
  while left_index < right_index
    temp = string[left_index]
    string[left_index] = string[right_index]
    string[right_index] = temp
    left_index +=1
    right_index -=1
  end
  return string
end

puts reverse_words("steal pound cake")