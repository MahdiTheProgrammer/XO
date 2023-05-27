

table = [[" " for i in range(3)] for j in range(3)]
print(table[0][0])
x = 9
NU = True
TIAW = False
def WinnerFounder(table):
    TIAW = False
    w = ""
    # -----------------------Winner checking-------------------------#
    # For horizontal
    for f2 in range(3):
        nX = 0
        nO = 0
        if TIAW == True:
            break
        for f3 in range(3):
            if table[f2][f3] == "X":
                nX += 1
            if table[f2][f3] == "O":
                nO += 1
        if nX == 3:
            TIAW = True
            w = "You won"
        if nO == 3:
            TIAW = True
            w = "You lost"
    # For vertical
    for f2 in range(3):
        nX = 0
        nO = 0
        if TIAW == True:
            break
        for f3 in range(3):
            if table[f3][f2] == "X":
                nX += 1
            if table[f3][f2] == "O":
                nO += 1
        if nX == 3:
            TIAW = True
            w = "You won"
        if nO == 3:
            TIAW = True
            w = "You lost"
        
    # For a cross
    if table[0][0] == "X" and table[1][1] == "X" and table[2][2] == "X" and TIAW == False:
        TIAW = True
        w = "You won"
    if table[0][0] == "O" and table[1][1] == "O" and table[2][2] == "O" and TIAW == False:
        TIAW = True
        w = "You lost"
    if table[0][2] == "X" and table[1][1] == "X" and table[2][0] == "X" and TIAW == False:
        TIAW = True
        w = "You won"
    if table[0][2] == "O" and table[1][1] == "O" and table[2][0] == "O" and TIAW == False:
        TIAW = True
        w = "You lost"
    
    if w == "":
        w = "Equal"

    return TIAW, w
def Computerturn():
    pass

for f1 in range(x):
    if TIAW == True:
        break
    # -----------------------User's Turn-------------------------#
    if NU == True:
        x = int(input("Enter line: "))
        y = int(input("Enter column: "))
        if x > 3 or x < 1 or y > 3 or y < 1:
            print("Your number must be between 1 and 3")
            print("try again")
            print(table[0])
            print(table[1])
            print(table[2])
            x += 1
            NU = True
        else:
            if table[x-1][y-1] == " ":
                table[x-1][y-1] = "X"
                NU = False
                TIAW, w = WinnerFounder(table=table)
            else:
                print("This is already taken")
                print("try again")
                print(table[0])
                print(table[1])
                print(table[2])
                x += 1
                NU = True
    if TIAW == True:
        break
    # -----------------------Computer's Turn-------------------------#
    if NU == False:
        for f2 in range(3):
            if NU == True:
                break
            for f3 in range(3):
                if table[f2][f3] == " ":
                    table[f2][f3] = "O"
                    NU = True
                    print(table[0])
                    print(table[1])
                    print(table[2])
                    TIAW, w = WinnerFounder(table=table)
                    break

print("---------------")
print(w)
print(table[0])
print(table[1])
print(table[2])
