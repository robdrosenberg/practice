def my_function(arg)
  # write the body of your function here
  left_i = 0
  right_i = arg.length-1
  while left_i < right_i
    arg[left_i], arg[right_i] = \
      arg[right_i], arg[left_i]
    left_i += 1
    right_i -= 1
  end
  

  return "running with #{arg}"
end

# run your function through some test cases here
# remember: debugging is half the battle!
puts my_function('test input')
