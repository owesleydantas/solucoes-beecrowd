def main():
    john = str(input().lower())
    medico = str(input().lower())

    aj = 0
    am = 0

    for i in john:
        if i == 'a':
            aj += 1
    
    for j in medico:
        if j == 'a':
            am += 1

    if aj >= am:
        print("go")
    else:
        print("no")

if __name__ == "__main__":
    main()
