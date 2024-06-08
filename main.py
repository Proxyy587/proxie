total_marks = 720
correct_marks = 4
incorrect_marks = -1
total_questions = 180
unattempt_marks = 0

def neetImpossibleScore():

    impossible_scores = set()
    # correct marks

    for correct in range(181):
        score = correct * correct_marks
        if score > 0:
            impossible_scores.add(score)
    # incorrect marks
    for incorrect in range(181):
        score = incorrect * incorrect_marks
        if score > 0:
            impossible_scores.add(score)

    # unattempt 
    for unattempt in range(181):
        score = unattempt * unattempt_marks
        impossible_scores.add(score)

    return sorted(impossible_scores)

impossible_scores = neetImpossibleScore()
print(impossible_scores)