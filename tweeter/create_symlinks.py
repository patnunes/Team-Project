from sys import platform
from subprocess import Popen, PIPE

def main():
    list_cmd = ["ls"] if (platform == "linux") else ["dir"]
    del_cmd = ["rm"] if (platform == "linux") else ["del"]

    stat = run_cmd(list_cmd)
    if(stat.find("static") >= 0):
        stat = run_cmd(del_cmd, "static")
        print("static link found, deleting")
    else:
        print("static link not found")

    stat = run_cmd(list_cmd, "templates")
    if(stat.find("index.html") >= 0 or stat.find("signup.html") >= 0):
        stat = run_cmd(del_cmd.append("index.html"), "templates")
        stat = run_cmd(del_cmd.append("signup.html"), "templates")
        print("templates found, deleting")
    else:
        print("templates not found")

        create(platform)

def create(os):
    if(os == "linux"):
        print("creating links for linux")
        run_cmd(["ln", "-s", "../../Frontend/src/static"])
        run_cmd(["ln", "-s", "../../../Frontend/src/index.html"], dir="templates")
        run_cmd(["ln", "-s", "../../../Frontend/src/signup.html"], dir="templates")
    elif(os == "win32" and not is_admin()):
        print("creating links for windows")
        run_cmd(["mklink static ..\\..\\Frontend\\src\\static"])
        run_cmd(["mklink index.html ..\\..\\..\\Frontend\\src\\index.html"])
        run_cmd(["mklink signup.html ..\\..\\..\\Frontend\\src\\signup.html"])



def run_cmd(cmd, param="", dir="."):
    proc = Popen(cmd, cwd=dir, stdout=PIPE, stderr=PIPE, shell=True)
    stdout, stderr = proc.communicate(timeout=5)
    return str(stdout)


def is_admin():

    try:
        print("checking admin")
        return not ctypes.windll.shell32.IsUserAnAdmin()
    except:
        return 1

    ctypes.windll.shell32.ShellExecuteW(None, "runas", sys.executable, __file__, None, 1)


main()
