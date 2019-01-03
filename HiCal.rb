def merge_ranges(meetings)
  sorted = meetings.sort
  merged = [sorted[0]]
  sorted[1..-1].each do |current_start, current_end|
    last_start, last_end = merged[-1]
    if current_start <= last_end
      merged[-1] = [last_start, [last_end, current_end].max]
    else
      merged << [current_start, current_end]
    end
  end
  merged
end

meetings = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
p merge_ranges(meetings)