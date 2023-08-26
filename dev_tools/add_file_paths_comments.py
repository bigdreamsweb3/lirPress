import os

root_folder = r"C:\Users\chasefi\Documents\litPress"
file_extensions = (".js", ".html")


def add_file_paths_comments(root_folder):
    print("Adding comments to files...")
    for foldername, subfolders, filenames in os.walk(root_folder):
        # Exclude "node_modules" folder from subdirectories
        if "node_modules" in subfolders:
            subfolders.remove("node_modules")
        for filename in filenames:
            if filename.endswith(file_extensions):
                file_path = os.path.join(foldername, filename)
                comment_text = get_comment_text(file_path)
                add_comment_to_file(file_path, comment_text)


def get_comment_text(file_path):
    relative_path = os.path.relpath(file_path, root_folder)
    return "./" + relative_path.replace("\\", "/")


def add_comment_to_file(file_path, comment_text):
    print(f"Adding comment to: {file_path}")
    with open(file_path, "r", encoding="utf-8") as file:
        content = file.read()
    # Remove existing path comments with the old path
    content = remove_existing_path_comments(content)
    with open(file_path, "w", encoding="utf-8") as file:
        file.write(f"// path: {comment_text}\n" + content)


# def remove_existing_path_comments(content):
#     lines = content.split("\n")
#     # Remove existing path comments with the old path
#     lines = [line for line in lines if not line.strip().startswith(
#         "// path: ./C:/Users/chasefi/Documents/litPress")]
#     return "\n".join(lines)

def remove_existing_path_comments(content):
    lines = content.split("\n")
    # Remove existing path comments without the ./ notation
    lines = [line for line in lines if not line.strip().startswith("// path: ")]
    return "\n".join(lines)


add_file_paths_comments(root_folder)
print("File path comments added successfully.")
