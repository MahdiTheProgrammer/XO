
def all_possibilities():
    n = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    all = [[0, 0, 0, 0, 0, 0, 0, 0, 0]]
    for f1 in range(9):
        current_size = len(all)
        for f2 in range(current_size):
            n = all[f2].copy()
            n[f1] = 1
            if n not in all:
                all.append(n.copy())
            n[f1] = 0
            if n not in all:
                all.append(n.copy())
    return all


def check_winner(matris):
    if matris[0] == matris[1] == matris[2] and matris[0] != 0:
        return True
    if matris[3] == matris[4] == matris[5] and matris[3] != 0:
        return True
    if matris[6] == matris[7] == matris[8] and matris[6] != 0:
        return True
    if matris[0] == matris[4] == matris[8] and matris[0] != 0:
        return True
    if matris[2] == matris[4] == matris[6] and matris[2] != 0:
        return True
    if matris[0] == matris[3] == matris[6] and matris[0] != 0:
        return True
    if matris[1] == matris[4] == matris[7] and matris[1] != 0:
        return True
    if matris[2] == matris[5] == matris[8] and matris[2] != 0:
        return True
    return False


def winner_possibilities():
    winner = []
    all = all_possibilities()
    for f1 in range(512):
        if check_winner(matris=all[f1]) == True:
            winner.append(all[f1])
    for f2 in range(len(winner)):
        print(winner[f2])

    


winner_possibilities()
